insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer arhitekture','VII-1a','Zavrsen smer arhitekture na FTN-u.');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer informacionih sistema','VII-1a','Smer inzenjerstvo inf. sis.na FTN-u.');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer biomedicinskog inzenjerstva','VII-1a','Zavrsen Fakultet tehnickih nauka u Novom Sadu');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer elektrotehnike i racunarstva','VII-1a','Zavrsen smer elektrotehnike na FTN-u');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer gradjevinarstva','VII-1a','Zavrsen smer gradjevine na FTN-u.');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer grafickog inzenjerstva i dizajna','VII-1a','Zavrsen Fakultet tehnickih nauka u Novom Sadu');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer menadzmenta','VII-1a','Zavrsen smer inzenjerskog menadzmenta na FTN-u u Novom Sadu');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer mehatronike','VII-1a','Zavrsen Fakultet tehnickih nauka u Novom Sadu');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer masinstva','VII-1a','Zavrsen smer energetike i procesne tehnike na FTN-u.');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer saobracaja','VII-1a','Zavrsen smer Saobracaj i transport na FTN-u');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer industrijskog inzenjerstva','VII-1a','Fakultet tehnickih nauka u Novom Sadu.');
insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(nextval('obrazovanje_seq'),'Diplomirani inzenjer racunarske grafike','VII-1a','Zavrsen smer animacija i inzenjerstvo na FTN-u.');

insert into obrazovanje(id,naziv,stepen_strucne_spreme,opis)
values(-100,'Test','Test','Test');

insert into preduzece
values(nextval('preduzece_seq'),'Telenor DOO',123456345,'Beograd','Telenor je norveska telekomunikaciona kompanija');
insert into preduzece
values(nextval('preduzece_seq'),'Imlek AD',134672387,'Beograd','Imlek je kompanija koja se bavi prodajom mlecnih proizvoda');
insert into preduzece
values(nextval('preduzece_seq'),'Sunoko DOO',179653456,'Novi Sad','Sunoko je najveci domaci proizodjac i izvoznik secera.');
insert into preduzece
values(nextval('preduzece_seq'),'NIS AD',0356743564,'Novi Sad','NIS je jedna od najvećih vertikalno integrisanih energetskih kompanija u jugoistočnoj Evropi.');

insert into preduzece
values(-100,'Test',0356743564,'Test','Test');

insert into sektor
values(nextval('sektor_seq'),'Telekomunikacije','TEL',1);
insert into sektor
values(nextval('sektor_seq'),'Sektor energetike','ENG',2);
insert into sektor
values(nextval('sektor_seq'),'Prehrambeni sektor','PRE',3);
insert into sektor
values(nextval('sektor_seq'),'Prehrambeni sektor','PRE',4);

insert into sektor
values(-100,'Test','Test',4);

insert into radnik
values(nextval('radnik_seq'),'Marko','Markovic',123453454,1,1);
insert into radnik
values(nextval('radnik_seq'),'Dejan','Dejanovic',123423654,2,2);
insert into radnik
values(nextval('radnik_seq'),'Igor','Petrovic',143678375,3,3);
insert into radnik
values(nextval('radnik_seq'),'Milica','Lakic',148536728,4,4);
insert into radnik
values(nextval('radnik_seq'),'Lara','Popovic',173584526,5,1);
insert into radnik
values(nextval('radnik_seq'),'Katarina','Popovic',127483647,6,2);
insert into radnik
values(nextval('radnik_seq'),'Luka','Jankovic',112317416,7,3);
insert into radnik
values(nextval('radnik_seq'),'Dalibor','Petrovic',102013267,8,4);
insert into radnik
values(nextval('radnik_seq'),'Uros','Markovic',102901435,9,1);
insert into radnik
values(nextval('radnik_seq'),'Jovan','Perovic',106482109,10,2);
insert into radnik
values(nextval('radnik_seq'),'Kosta','Peric',103428639,11,3);
insert into radnik
values(nextval('radnik_seq'),'Andjela','Lazic',109361987,12,4);

insert into radnik
values(-100,'Test','Test',109361987,12,4);   










