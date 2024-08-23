import React, { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import NavBody from "../../components/Navbar/NavBody";
import FooterBody from "../Footer/FooterBody";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	useEffect(() => {
		if (isError) {
			navigate("/login");
		}
	}, [isError, navigate]);

	const dataUser = [
		{
			title: "Nama",
			value: "Kautsar Abid Muttaqin",
		},
		{
			title: "Tanggal Lahir",
			value: "04-02-1999",
		},
		{
			title: "Jenis Kelamin",
			value: "Laki - Laki",
		},
		{
			title: "Email",
			value: "abidkautsar@gmail.com",
		},
		{
			title: "Nomor Handphone",
			value: "081264797798",
		},
	];

	const formatDate = (dateString) => {
		const parsedDate = parse(dateString, "dd-MM-yyyy", new Date());
		return format(parsedDate, "yyyy-MM-dd");
	};

	return (
		<>
			<header>
				<NavBody />
			</header>

			<main className="pt-[100px] mb-small">
				<h3 className="text-center">Profile</h3>

				<section className="flex flex-col items-center  gap-medium p-small w-full md:flex-row md:items-start lg:w-[75%]">
					<ProfilePicture />

					<ProfileData dataUser={dataUser} formatDate={formatDate} />
				</section>
			</main>

			<footer>
				<FooterBody />
			</footer>
		</>
	);
}
