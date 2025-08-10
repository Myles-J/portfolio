"use client";

export const YearOfExperience = () => {
	const HIRE_YEAR = 2022;
	const currentYear = new Date().getFullYear();
	const yearOfExperience = currentYear - HIRE_YEAR;
	return (
		<span className="font-bold text-primary">{yearOfExperience} years</span>
	);
};
