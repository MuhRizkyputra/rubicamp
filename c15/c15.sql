create table jurusan(
    id_jurusan character(5) primary key not null,
    nama_jurusan varchar(100) not null
);

insert into jurusan values
('J0001', 'SISTEM INFORMASI'),
('J0002', 'TEKNIK SIPIL'),
('J0003', 'ILMU KELAUTAN'),
('J0004', 'SASTRA INGGRIS'),
('J0005', 'MANAJAMEN'),
('JOO06', 'AKUTANSI'),
('J0007', 'SASTRA ARAB'),
('J0008', 'TEKNIK INDUSTRI'),
('J0009', 'ILMU PERTANIAN'),
('J0010', 'DKV');

create table mahasiswa(
    nim character(5) primary key not null,
    nama varchar(100)not null,
    alamat text,
    id_jurusan character(5) not null,
    foreign key (id_jurusan) references jurusan(id_jurusan)
);

insert into mahasiswa values
('00001', 'RIZKY', 'BANDUNG', 'J0001'),
('00002', 'PANJI', 'JAKARTA', 'J0002'),
('00003', 'FAHMI', 'PAPUA', 'J0003'),
('00004', 'IRSYAD', 'PADANG', 'J0004'),
('00005', 'FIKRI', 'MEDAN', 'J0005'),
('00006', 'ANSYAH', 'SURABAYA', 'J0006'),
('00007', 'YASMIN', 'JAKARTA', 'J0007'),
('00008', 'ANITA', 'PAPUA', 'J0008'),
('00009', 'APRILIANTO', 'PADANG', 'J0009'),
('00010', 'ROMI', 'MEDAN', 'J0010');


create table mata_kuliah (
    id_matkul character(5) primary key not null,
    nama_matkul varchar(50) not null,
    sks character(5) not null
);
insert into mata_kuliah values
('SI101', 'ALGORITMA', '2'),
('TS203', 'ALJABAR', '3'),
('IK023', 'ZOOLOGI LAUT','2'),
('SG109', 'PRONOUN', '3'),
('MM909', 'PAJAK', '2');
('AK129', 'AKUNTAN', '2'),
('SA198', 'IQRO', '3'),
('TI567', 'KIMIA','2'),
('TP192', 'AGRASI', '3'),
('DK290', 'ART', '2');

create table nilai (
    id_nilai integer primary key autoincrement,
    nip character(5) Not null,
    id_matkul character(5) not null,
    nim character(5) not null,
    hasil_nilai varchar(5) not null,
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id_matkul),
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)
);
