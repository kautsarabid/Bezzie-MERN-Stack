import User from "../models/UsersModel.js";
import { body, validationResult } from "express-validator";
import argon from "argon2";

export const Register = [
	// Validasi input
	body("email").isEmail().withMessage("Masukkan email yang valid"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password minimal 6 karakter"),

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const existingUser = await User.findOne({
				where: {
					email: req.body.email,
				},
			});
			if (existingUser) {
				return res.status(400).json({ msg: "Email sudah terdaftar" });
			}

			const hashedPassword = await argon.hash(req.body.password);

			await User.create({
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword,
				role: req.body.role || "user",
			});

			res.status(201).json({ msg: "Register berhasil" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ msg: "Terjadi kesalahan pada server" });
		}
	},
];

export const Login = async (req, res) => {
	const user = await User.findOne({
		where: {
			email: req.body.email,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

	const match = await argon.verify(user.password, req.body.password);

	if (!match) return res.statu(400).json({ msg: "Password Salah" });

	req.session.userId = user.uuid;
	const uuid = user.uuid;
	const name = user.name;
	const email = user.email;
	const role = user.role;
	res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
	if (!req.session.userId) {
		return res.status(401).json({ msg: "Mohon login ke akun anda" });
	}
	const user = await User.findOne({
		attributes: ["uuid", "name", "email", "role"],
		where: {
			uuid: req.session.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	res.status(200).json(user);
};

export const logOut = (req, res) => {
	req.session.destroy((err) => {
		if (err) return res.status(400).json({ msg: "tidak dapat logout" });
		res.status(200).json({ msg: "Anda telah logout" });
	});
};
