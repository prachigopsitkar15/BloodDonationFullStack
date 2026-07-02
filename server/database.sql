create database pern;
create table Person(
    aadhar integer primary key,
    fname varchar(255),
    lname varchar(255),
    age integer,
    ph_no bigint,
    sex varchar(3),
    bd_grp varchar(3)
    );

    create table Blood(
    bd_num integer primary key,
    bd_grp varchar(3),
    bd_status varchar(255)

);
create table Donates(
    person_id integer,
    bd_num integer,
    med_history varchar(255),
    units integer,
    primary key(person_id,bd_num),
    foreign key(person_id) references Person(aadhar),
    foreign key (bd_num ) references Blood(bd_num)
    );

create table Hospital(
    hospital_name varchar(255) primary key,
    hospital_address varchar(255)


);
create table Reciever(
    reciever_id serial primary key,
    bd_num integer,
    reciever_aadhar integer,
    req_num integer,
    foreign key(req_num) references Request(req_num), 
    
    foreign key(bd_num) references Blood(bd_num),
    foreign key(reciever_aadhar) references Person(aadhar)
    
    
);
create table Request(
    req_num serial primary key,
    person_id integer ,
    
    hospital varchar(255),
    reason varchar(255),
    units integer,
    
    foreign key (hospital) references Hospital(hospital_name),
    foreign key(person_id) references Person(aadhar)
    

);
create table users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar (255) not null
);