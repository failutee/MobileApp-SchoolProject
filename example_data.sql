-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Mar 2023, 23:12
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `school_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `data`
--

CREATE TABLE `data` (
  `person_id` int(11) NOT NULL,
  `person_name` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `car` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `data`
--

INSERT INTO `data` (`person_id`, `person_name`, `birth_date`, `car`) VALUES
(1, 'Katarzyna Dąbrowska', '1979-04-11', 'Toyota Corolla'),
(2, 'Filip Nowak', '2000-05-21', 'Volkswagen Golf'),
(3, 'Julia Kowalczyk', '1995-07-13', 'Audi A3'),
(4, 'Dawid Sobczak', '1981-06-10', 'Mercedes-Benz C-Class'),
(5, 'Natalia Nowakowska', '1994-11-14', 'Kia Sportage'),
(6, 'Piotr Szymański', '1982-09-20', 'BMW 3 Series'),
(7, 'Jan Nowak', '1987-11-16', 'Ford Focus'),
(8, 'Marek Kowalczyk', '2002-07-14', 'BMW 5 Series'),
(9, 'Katarzyna Czarnecka', '1999-12-31', 'Hyundai Tucson'),
(10, 'Damian Wojcik', '1999-06-16', 'Mazda CX-5');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`person_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `data`
--
ALTER TABLE `data`
  MODIFY `person_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
