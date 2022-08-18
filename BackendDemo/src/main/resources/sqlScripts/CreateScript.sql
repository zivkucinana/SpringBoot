DROP TABLE IF EXISTS obrazovanje CASCADE;
DROP TABLE IF EXISTS preduzece CASCADE;
DROP TABLE IF EXISTS sektor CASCADE;
DROP TABLE IF EXISTS radnik CASCADE;

DROP SEQUENCE IF EXISTS obrazovanje_seq;
DROP SEQUENCE IF EXISTS preduzece_seq;
DROP SEQUENCE IF EXISTS sektor_seq;
DROP SEQUENCE IF EXISTS radnik_seq;



create table obrazovanje(
id integer not null,
naziv varchar(100),
stepen_strucne_spreme varchar(10),
opis varchar(500)

);

create table preduzece(
id integer not null,
naziv varchar(100),
pib integer,
sediste varchar(100),
opis varchar(500)

);

create table sektor(
id integer not null,
naziv varchar(100),
oznaka varchar(10),
preduzece integer not null

);

create table radnik(
id integer not null,
ime varchar(50),
prezime varchar(50),
broj_lk integer,
obrazovanje integer not null,
sektor integer not null


);

ALTER TABLE obrazovanje
	ADD CONSTRAINT pk_obrazovanje PRIMARY KEY (id);
	
alter table preduzece
add constraint pk_preduzece PRIMARY KEY (id);

alter table sektor
add constraint pk_sektor primary key(id);

alter table radnik
add constraint pk_radnik primary key(id);

	
alter table sektor
add constraint fk_sektor_preduzece foreign key (preduzece)
references preduzece(id);

alter table radnik
add constraint fk_radnik_obrazovanje foreign key (obrazovanje)
references obrazovanje(id);

alter table radnik
add constraint fk_radnik_sektor foreign key (sektor)
references sektor(id);

CREATE INDEX idx_pk_obrazovanje ON obrazovanje(id);  
CREATE INDEX idx_pk_preduzece ON preduzece(id); 
CREATE INDEX idx_pk_sektor ON sektor(id); 
CREATE INDEX idx_pk_radnik ON radnik(id); 

CREATE INDEX idx_fk_sektor_preduzece ON sektor(preduzece);
create index idx_fk_radnik_obrazovanje on radnik(obrazovanje);
create index idx_fk_radnik_sektor on radnik(sektor);


CREATE SEQUENCE IF NOT EXISTS obrazovanje_seq INCREMENT 1 START 1;  
CREATE SEQUENCE IF NOT EXISTS preduzece_seq INCREMENT 1 START 1;  
CREATE SEQUENCE IF NOT EXISTS sektor_seq INCREMENT 1 START 1;  
CREATE SEQUENCE IF NOT EXISTS radnik_seq INCREMENT 1 START 1;  

ALTER TABLE obrazovanje ALTER COLUMN id SET DEFAULT nextval('obrazovanje_seq');
ALTER TABLE preduzece ALTER COLUMN id SET DEFAULT nextval('preduzece_seq');
ALTER TABLE radnik ALTER COLUMN id SET DEFAULT nextval('radnik_seq');
ALTER TABLE sektor ALTER COLUMN id SET DEFAULT nextval('sektor_seq');







