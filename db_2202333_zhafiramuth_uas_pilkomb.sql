-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 05:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2202333_zhafiramuth_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_zhafiramuth`
--

CREATE TABLE `peminjamanbuku_zhafiramuth` (
  `id` int(11) NOT NULL,
  `judul_buku` text NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` text NOT NULL,
  `alamat_peminjam` text NOT NULL,
  `noHp_peminjam` text NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku_zhafiramuth`
--

INSERT INTO `peminjamanbuku_zhafiramuth` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'His Wish', 2, 'Zhafira Muthia', 'Jl. Kalong No. 1', '089984814888', '2024-01-05', '2024-01-06', '2 Days'),
(2, 'Sousou no Frieren', 1, 'Aulia Akbar', 'Jl. Gacor No. 2', '089984814222', '2024-01-08', '2024-01-11', '4 Days'),
(3, 'The Apothecary Diaries', 4, 'Susan Christopher', 'Jl. Lily No. 3', '085544112200', '2024-01-10', '2024-01-12', '3 Days'),
(4, 'Tangled Memories', 2, 'Jihan Aska', 'Jl. Save No. 4', '085544112244', '2024-01-08', '2024-01-12', '5 Days'),
(6, 'Harry Potter', 4, 'Fatimah Dzakia', 'Jl. Sumur No. 6', '089631665222', '2024-01-08', '2024-01-10', '3 Days');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_zhafiramuth`
--
ALTER TABLE `peminjamanbuku_zhafiramuth`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_zhafiramuth`
--
ALTER TABLE `peminjamanbuku_zhafiramuth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
