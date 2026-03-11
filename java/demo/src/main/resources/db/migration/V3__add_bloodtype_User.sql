alter table User
    add column bloodType enum ('A','AB','B','O');

create table Member
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

create table Post
(
    id        int unsigned auto_increment                                     not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP                             not null,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,
    title     varchar(255)                                                    not null,
    writer    varchar(31)                                                     not null,
    primary key (id)
);

create table PostBody
(
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP                             not null,
    id        int unsigned auto_increment                                     not null,
    post      int unsigned                                                    not null,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,
    body      text                                                            not null,
    primary key (id)
);

alter table PostBody
    add constraint UKbstcjljn3wcpf2xlv2xeplw9k unique (post);

alter table PostBody
    add constraint fk_PostBody_post
        foreign key (post) references Post (id) on delete cascade;

create table Reply
(
    id        int unsigned auto_increment                                     not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP                             not null,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,
    reply     varchar(255)                                                    not null,
    replier   varchar(31)                                                     not null,
    post      int unsigned                                                    not null,
    primary key (id)
);

alter table Reply
    add constraint fk_Reply_post
        foreign key (post)
            references Post (id)
            on delete cascade;

# 여긴 내가 추가함
create table MemberImage (
                             id int unsigned not null,
                             orgname varchar(255),
                             savedir varchar(255),
                             savename varchar(255),
                             member int unsigned,
                             primary key (id)
)

alter table MemberImage
    add constraint fk_MemberImage_member
        foreign key (member)
            references Member (id)
            on delete cascade
