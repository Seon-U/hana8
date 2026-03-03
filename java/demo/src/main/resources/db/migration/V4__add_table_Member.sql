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
