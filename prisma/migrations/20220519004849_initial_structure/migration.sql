-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "backgroungImg" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "privacy" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "privacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participantsGroup" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "participantsGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminsGroup" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "adminsGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_bygroup" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "reading_bygroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alread_read_bygroup" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "alread_read_bygroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "next_books_bygroup" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "next_books_bygroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authors_id" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books_categories" (
    "id" SERIAL NOT NULL,
    "books_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,

    CONSTRAINT "books_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books_genders" (
    "id" SERIAL NOT NULL,
    "books_id" INTEGER NOT NULL,
    "genders_id" INTEGER NOT NULL,

    CONSTRAINT "books_genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book_evaluetion" (
    "id" SERIAL NOT NULL,
    "grade" INTEGER NOT NULL,
    "description" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "book_evaluetion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_books_favorites" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "books_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "user_books_favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_next_books" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "books_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "user_next_books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_already_read" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "books_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "user_already_read_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_reading_book" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "books_id" INTEGER NOT NULL,
    "privacy_id" INTEGER NOT NULL,

    CONSTRAINT "user_reading_book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");

-- CreateIndex
CREATE UNIQUE INDEX "authors_name_key" ON "authors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genders_name_key" ON "genders"("name");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantsGroup" ADD CONSTRAINT "participantsGroup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantsGroup" ADD CONSTRAINT "participantsGroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminsGroup" ADD CONSTRAINT "adminsGroup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminsGroup" ADD CONSTRAINT "adminsGroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_bygroup" ADD CONSTRAINT "reading_bygroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_bygroup" ADD CONSTRAINT "reading_bygroup_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alread_read_bygroup" ADD CONSTRAINT "alread_read_bygroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alread_read_bygroup" ADD CONSTRAINT "alread_read_bygroup_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "next_books_bygroup" ADD CONSTRAINT "next_books_bygroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "next_books_bygroup" ADD CONSTRAINT "next_books_bygroup_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authors_id_fkey" FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_categories" ADD CONSTRAINT "books_categories_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_categories" ADD CONSTRAINT "books_categories_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_genders" ADD CONSTRAINT "books_genders_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_genders" ADD CONSTRAINT "books_genders_genders_id_fkey" FOREIGN KEY ("genders_id") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_evaluetion" ADD CONSTRAINT "book_evaluetion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_evaluetion" ADD CONSTRAINT "book_evaluetion_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_evaluetion" ADD CONSTRAINT "book_evaluetion_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_books_favorites" ADD CONSTRAINT "user_books_favorites_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_books_favorites" ADD CONSTRAINT "user_books_favorites_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_books_favorites" ADD CONSTRAINT "user_books_favorites_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_next_books" ADD CONSTRAINT "user_next_books_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_next_books" ADD CONSTRAINT "user_next_books_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_next_books" ADD CONSTRAINT "user_next_books_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_already_read" ADD CONSTRAINT "user_already_read_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_already_read" ADD CONSTRAINT "user_already_read_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_already_read" ADD CONSTRAINT "user_already_read_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reading_book" ADD CONSTRAINT "user_reading_book_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reading_book" ADD CONSTRAINT "user_reading_book_privacy_id_fkey" FOREIGN KEY ("privacy_id") REFERENCES "privacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reading_book" ADD CONSTRAINT "user_reading_book_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
