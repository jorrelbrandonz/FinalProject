-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2023 at 09:44 AM
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
-- Database: `testingdb`
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
(54651, 'JLabsAirline, Cebu, Philippines', 'JLabsAirline, Boracay, Philippines', '2023-05-16 17:01:32.000000', '2023-05-31 17:01:32.000000', 'Venti', 560, 23),
(54654, 'JLabsAirline', 'JLabsAirline, Singapore', '2023-05-22 17:06:32.000000', '2023-05-23 17:06:32.000000', 'Venti', 561, 32),
(54655, 'JLabsAirline', 'JLabsAirline, Ja Manafaru, Maldives', '2023-05-22 17:06:32.000000', '2023-05-23 17:06:32.000000', 'Venti', 561, 32),
(54656, 'JLabsAirline', 'JLabsAirline, Yoshino, Japan', '2023-05-16 17:08:18.000000', '2023-05-17 17:08:18.000000', 'Venti', 560, 32);

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
  MODIFY `FlightNumber` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54657;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
