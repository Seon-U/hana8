alter table User
    add column bloodType enum ('A','AB','B','O');

create table testdb.Member
(
    id        int unsigned auto_increment
        primary key,
    isActive  tinyint(1) default 0                 not null,
    nickname  varchar(30)                          not null,
    email     varchar(255)                         not null,
    password  varchar(128)                         not null,
    bloodType enum ('A', 'AB', 'B', 'O')           null,
    createdAt timestamp  default CURRENT_TIMESTAMP not null,
    updatedAt timestamp  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    constraint uniq_Member_email
        unique (email)
);

create table Post (
  id int unsigned not null auto_increment,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP not null,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,
  title varchar(255) not null,
  writer varchar(31) not null,
  body varchar(2000),
  primary key (id)
);
