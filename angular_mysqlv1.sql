-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2022 at 02:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular_mysqlv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`) VALUES
(1, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(2, 'Jibril Odeniran', 'jodo@gmail.com'),
(3, 'Neema Odeniran', 'neema@gmail.com'),
(4, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(5, 'Jibril Odeniran', 'jodo@gmail.com'),
(6, 'Neema Odeniran', 'neema@gmail.com'),
(7, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(8, 'Jibril Odeniran', 'jodo@gmail.com'),
(9, 'Neema Odeniran', 'neema@gmail.com'),
(10, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(11, 'Jibril Odeniran', 'jodo@gmail.com'),
(12, 'Neema Odeniran', 'neema@gmail.com'),
(13, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(14, 'Jibril Odeniran', 'jodo@gmail.com'),
(15, 'Neema Odeniran', 'neema@gmail.com'),
(16, 'Jibril Odeniran', 'jodo@gmail.com'),
(17, 'Neema Odeniran', 'neema@gmail.com'),
(18, 'Banji Odeniran', 'muhdqozeem@gmail.com'),
(19, 'Jibril Odeniran', 'jodo@gmail.com'),
(20, 'Neema Odeniran', 'neema@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
