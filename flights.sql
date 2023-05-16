-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2023 at 04:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jlabsairlines`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `FlightNumber` int(20) UNSIGNED NOT NULL,
  `DepartureAirport` varchar(100) NOT NULL,
  `ArrivalAirport` varchar(100) NOT NULL,
  `Departure` datetime(6) NOT NULL,
  `Arrival` datetime(6) NOT NULL,
  `AirplaneType` varchar(100) NOT NULL,
  `TicketPrice` decimal(65,0) UNSIGNED NOT NULL,
  `Passengers` smallint(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`FlightNumber`, `DepartureAirport`, `ArrivalAirport`, `Departure`, `Arrival`, `AirplaneType`, `TicketPrice`, `Passengers`) VALUES
(54766, 'JLabsAirline, Cebu, Philippines', 'Shanghai, China', '2023-05-17 06:54:00.000000', '2023-05-17 22:39:00.000000', 'Venti 41', 20500, 42),
(54767, 'JLabsAirline, Cebu, Philippines', 'Vancouver, Canada', '2023-05-15 15:39:00.000000', '2023-05-16 06:24:00.000000', 'Venti 4', 16000, 46),
(54768, 'JLabsAirline, Cebu, Philippines', 'Bangkok, Thailand', '2023-05-14 23:54:00.000000', '2023-05-15 02:39:00.000000', 'Venti 22', 4000, 47),
(54769, 'JLabsAirline, Cebu, Philippines', 'Kuala Lumpur, Malaysia', '2023-05-16 10:39:00.000000', '2023-05-16 22:39:00.000000', 'Venti 14', 23500, 33),
(54770, 'JLabsAirline, Cebu, Philippines', 'Paris, France', '2023-05-17 01:54:00.000000', '2023-05-17 06:09:00.000000', 'Venti 43', 21000, 31),
(54771, 'JLabsAirline, Cebu, Philippines', 'Hong Kong, China', '2023-05-15 16:24:00.000000', '2023-05-16 04:39:00.000000', 'Venti 12', 10500, 32),
(54772, 'JLabsAirline, Cebu, Philippines', 'Paris, France', '2023-05-14 23:54:00.000000', '2023-05-15 14:09:00.000000', 'Venti 34', 20500, 43),
(54773, 'JLabsAirline, Cebu, Philippines', 'Manila, Philippines', '2023-05-15 09:54:00.000000', '2023-05-15 22:09:00.000000', 'Venti 46', 17000, 26),
(54774, 'JLabsAirline, Cebu, Philippines', 'Seoul, South Korea', '2023-05-17 13:09:00.000000', '2023-05-18 01:09:00.000000', 'Venti 16', 24500, 34),
(54775, 'JLabsAirline, Cebu, Philippines', 'Kuala Lumpur, Malaysia', '2023-05-15 17:39:00.000000', '2023-05-15 20:39:00.000000', 'Venti 47', 25000, 22),
(54776, 'JLabsAirline, Cebu, Philippines', 'Taipei, Taiwan', '2023-05-15 02:09:00.000000', '2023-05-15 07:09:00.000000', 'Venti 24', 6000, 29),
(54777, 'JLabsAirline, Cebu, Philippines', 'New Delhi, India', '2023-05-16 09:24:00.000000', '2023-05-16 17:54:00.000000', 'Venti 19', 24500, 23),
(54778, 'JLabsAirline, Cebu, Philippines', 'Vancouver, Canada', '2023-05-15 20:39:00.000000', '2023-05-16 02:24:00.000000', 'Venti 3', 14000, 46),
(54779, 'JLabsAirline, Cebu, Philippines', 'Tokyo, Japan', '2023-05-15 18:24:00.000000', '2023-05-16 06:39:00.000000', 'Venti 29', 15000, 27),
(54780, 'JLabsAirline, Cebu, Philippines', 'Hong Kong, China', '2023-05-15 16:09:00.000000', '2023-05-16 02:09:00.000000', 'Venti 1', 22500, 45),
(54781, 'JLabsAirline, Cebu, Philippines', 'Sydney, Australia', '2023-05-15 18:09:00.000000', '2023-05-16 06:24:00.000000', 'Venti 43', 2500, 43),
(54782, 'JLabsAirline, Cebu, Philippines', 'Paris, France', '2023-05-15 13:24:00.000000', '2023-05-16 00:09:00.000000', 'Venti 47', 11500, 22),
(54783, 'JLabsAirline, Cebu, Philippines', 'Kuala Lumpur, Malaysia', '2023-05-14 16:09:00.000000', '2023-05-14 21:24:00.000000', 'Venti 10', 8000, 22),
(54784, 'JLabsAirline, Cebu, Philippines', 'Vancouver, Canada', '2023-05-15 08:09:00.000000', '2023-05-15 23:09:00.000000', 'Venti 31', 16000, 43),
(54785, 'JLabsAirline, Cebu, Philippines', 'Bangkok, Thailand', '2023-05-15 19:39:00.000000', '2023-05-16 07:24:00.000000', 'Venti 9', 4000, 49),
(54786, 'JLabsAirline, Cebu, Philippines', 'Sydney, Australia', '2023-05-15 22:54:00.000000', '2023-05-16 12:09:00.000000', 'Venti 4', 11000, 34),
(54787, 'JLabsAirline, Cebu, Philippines', 'Bangkok, Thailand', '2023-05-14 20:39:00.000000', '2023-05-15 03:39:00.000000', 'Venti 30', 14500, 49),
(54788, 'JLabsAirline, Cebu, Philippines', 'Taipei, Taiwan', '2023-05-14 22:24:00.000000', '2023-05-15 01:39:00.000000', 'Venti 12', 20500, 25),
(54789, 'JLabsAirline, Cebu, Philippines', 'Manila, Philippines', '2023-05-14 16:09:00.000000', '2023-05-14 23:39:00.000000', 'Venti 41', 19000, 24),
(54790, 'JLabsAirline, Cebu, Philippines', 'Paris, France', '2023-05-17 06:54:00.000000', '2023-05-17 14:54:00.000000', 'Venti 20', 25000, 39),
(54791, 'JLabsAirline, Cebu, Philippines', 'Singapore', '2023-05-15 22:09:00.000000', '2023-05-16 07:24:00.000000', 'Venti 34', 16500, 42),
(54792, 'JLabsAirline, Cebu, Philippines', 'Vancouver, Canada', '2023-05-15 07:39:00.000000', '2023-05-15 14:09:00.000000', 'Venti 9', 15500, 48),
(54793, 'JLabsAirline, Cebu, Philippines', 'Singapore', '2023-05-16 21:09:00.000000', '2023-05-17 05:24:00.000000', 'Venti 23', 14500, 30),
(54794, 'JLabsAirline, Cebu, Philippines', 'Tokyo, Japan', '2023-05-17 06:09:00.000000', '2023-05-17 09:39:00.000000', 'Venti 18', 24500, 20),
(54795, 'JLabsAirline, Cebu, Philippines', 'New Delhi, India', '2023-05-16 07:09:00.000000', '2023-05-16 14:09:00.000000', 'Venti 1', 10500, 31);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`FlightNumber`),
  ADD UNIQUE KEY `FlightNumber` (`FlightNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `FlightNumber` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54796;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
