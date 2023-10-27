.headers on                 -- untuk membuat tampilan menjadi head memunculkan row
.mode column                -- membuat tampilan database menjadi kolom

create table jurusan(
    id_jurusan character(5) primary key not null,
    nama_jurusan varchar(100) not null
);

insert into jurusan(id_jurusan, nama_jurusan) values
('J0001', 'SISTEM INFORMASI'),
('J0002', 'TEKNIK SIPIL'),
('J0003', 'ILMU KELAUTAN'),
('J0004', 'SASTRA INGGRIS'),
('J0005', 'MANAJAMEN');

create table dosen (
    nip character(5) primary key not null,
    nama_dosen varchar(100) not null
);

insert into dosen values
('D0001', 'ANDRI SUSANTO'),
('D0002', 'SULTAN WIBOWO'),
('D0003', 'VIAN WATI'),
('D0004', 'SURI WIDODO'),
('D0005', 'ANDRI');

create table mahasiswa(
    nim character(5) primary key not null,
    nama varchar(100) not null, 
    alamat text,
    id_jurusan character(5) not null,
    foreign key (id_jurusan) references jurusan (id_jurusan)
);

insert into mahasiswa values 
('00001', 'IQBAL', 'BANDUNG', 'J0001'),
('00002', 'PANJI', 'JAKARTA', 'J0004'),
('00003', 'FAHMI', 'PAPUA', 'J0002'),
('00004', 'IRSYAD', 'PADANG', 'J0003'),
('00005', 'FIKRI', 'MEDAN', 'J0005'),
('00006', 'ANSYAH', 'SURABAYA', 'J0001');


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

insert into nilai (nip, id_matkul, nim, hasil_nilai) values
('D0001', 'SI101', '00001', 'A'),
('D0003', 'IK023', '00002', 'B'),
('D0004', 'TS203', '00003', 'A'),
('D0005', 'SG109', '00004', 'A'),
('D0003', 'IK023', '00005', 'A'),
('D0002', 'MM909', '00006', 'A');