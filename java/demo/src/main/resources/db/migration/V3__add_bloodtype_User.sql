alter table User
    add column bloodType enum ('A','AB','B','O');

create table testdb.Member
(
    isActive  tinyint(1) default 0                 not null,
    createdAt timestamp  default CURRENT_TIMESTAMP not null,
    id        int unsigned auto_increment
        primary key,
    updatedAt timestamp  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    nickname  varchar(30)                          not null,
    password  varchar(128)                         not null,
    email     varchar(255)                         not null,
    bloodType enum ('A', 'AB', 'B', 'O')           null,
    constraint uniq_Member_email
        unique (email)
);

create table testdb.Post
(
    createdAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    id        varchar(20)                        not null
        primary key,
    title     varchar(255)                        null
);
