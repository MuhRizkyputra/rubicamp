create table jurusan(
    id_jurusan character(5) primary key not null,
    nama_jurusan varchar(100) not null
);

insert into jurusan(id_jurusan, nama_jurusan) values
('J0001', 'SISTEM INFORMASI'),
('J0002', 'TEKNIK SIPIL'),
('J0003', 'ILMU KELAUTAN'),
('J0004', 'SASTRA INGGRIS'),
('J0005', 'MANAJAMEN'),
('JOO06', 'AKUTANSI'),
('J0007', 'SASTRA ARAB'),
('J0008', 'TEKNIK INDUSTRI'),
('J0009', 'ILMU PERTANIAN'),
('J0010', 'DATA MINING');


create table dosen (
    nip character(5) primary key not null,
    nama_dosen varchar(100) not null
);

insert into dosen values
('D0001', 'ANDRI SUSANTO'),
('D0002', 'SULTAN WIBOWO'),
('D0003', 'VIAN WATI'),
('D0004', 'SURI WIDODO'),
('D0005', 'ANDRI'),
('D0006', 'USANTO'),
('D0007', 'WIBOWO'),
('D0008', 'WATI'),
('D0009', 'WIDODO'),
('D0010', 'RIA');

create table mahasiswa(
    nim character(5) primary key not null,
    nama varchar(100) not null, 
    alamat text,
    id_jurusan character(5) not null,
    foreign key (id_jurusan) references jurusan (id_jurusan)
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
('IK023', 'ZOOLOGI LAUT', '2'),
('SG109', 'PRONOUN', '3'),
('MM909', 'PAJAK', '2'),
('AK129', 'AKUNTAN', '2'),
('SA198', 'IQRO', '3'),
('TI567', 'KIMIA', '2'),
('TP192', 'AGRASI', '3'),
('DM202', 'DATA MINING', '4');


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
('D0002', 'IK023', '00002', 'B'),
('D0003', 'TS203', '00003', 'A'),
('D0004', 'SG109', '00004', 'A'),
('D0005', 'IK023', '00005', 'E'),
('D0006', 'AK129', '00006', 'C'),
('D0007', 'SA198', '00007', 'A'),
('D0008', 'TI567', '00008', 'B'),
('D0009', 'TP192', '00009', 'E'),
('D0010', 'DM202', '00010', 'E');

alter table mahasiswa add umur date;
update mahasiswa set umur = '2001-11-02' where nim = '00001';
update mahasiswa set umur = '2008-05-02' where nim = '00002';
update mahasiswa set umur = '2006-05-02' where nim = '00003';
update mahasiswa set umur = '2008-11-02' where nim = '00004';
update mahasiswa set umur = '2009-07-02' where nim = '00005';
update mahasiswa set umur = '2000-01-02' where nim = '00006';
update mahasiswa set umur = '2006-12-02' where nim = '00007';
update mahasiswa set umur = '2005-03-02' where nim = '00008';
update mahasiswa set umur = '2003-07-02' where nim = '00009';
update mahasiswa set umur = '2007-09-02' where nim = '00010';

-- UNTUK UPDATE DATA  => UPDATE table SET column WHERE;

-- 1. tampilkan seluruh data mahasiswa beserta nama jurusannya.

select nama,nama_jurusan from jurusan join mahasiswa using (id_jurusan);

-- 2. tampilkan mahasiswa yang memiliki umur di bawah 20 tahun.

select *, date('now') - date(umur) as age from mahasiswa where age <20;

--3. tampilkan mahasiswa yang memiliki nilai 'B' ke atas.

select distinct nim, (select nama from mahasiswa where mahasiswa.nim = nilai.nim) as nama from nilai where nilai.hasil_nilai <= 'B';

--4. tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10

select mahasiswa.nim, mahasiswa.nama, sum(mata_kuliah.sks) as total_sks from mahasiswa
join nilai on nilai.nim = mahasiswa.nim
join mata_kuliah on nilai.id_matkul = mata_kuliah.id_matkul
group by mahasiswa.nim, mahasiswa.nama
having total_sks < 10;

--5. tampilkan mahasiswa yang mengontrak mata kuliah 'data mining'

select nilai.nim, mahasiswa.nama, mata_kuliah.nama_matkul as matakuliah
from nilai inner join mahasiswa on nilai.nim = mahasiswa.nim
inner join mata_kuliah on nilai.id_matkul = mata_kuliah.id_matkul
where mata_kuliah.nama_matkul like '%data mining%';

--6.tampilkan jumlah mahasiswa untuk setiap dosen

select nama_dosen,(select count(distinct nim)from nilai where nilai.nip = dosen.nip) as jumlah_mahasiswa from dosen;

--7.urutkan mahasiswa berdasarkan umurnya

select nama, date('now') - date(umur) as umur_sekarang from mahasiswa order by umur_sekarang asc;

--8.tampilkan kontrak matakuliah yang harus diulang,serta tampilkan data mahasiswa jurusan dan dosen secara lengkap 

select distinct nilai.id_matkul, nilai.hasil_nilai, mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.umur,
jurusan.id_jurusan, jurusan.nama_jurusan, dosen.nama_dosen, nilai.nip from nilai join mahasiswa on nilai.nim = mahasiswa.nim
join jurusan on mahasiswa.id_jurusan =  jurusan.id_jurusan
join dosen on nilai.nip = dosen.nip where nilai.hasil_nilai >='D';



