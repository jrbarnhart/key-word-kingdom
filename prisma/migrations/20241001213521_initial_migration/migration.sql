-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phash" TEXT NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "lifeStreak" INTEGER NOT NULL DEFAULT 0,
    "lifeScore" INTEGER NOT NULL DEFAULT 0,
    "highScore" INTEGER NOT NULL DEFAULT 0,
    "lifeWords" INTEGER NOT NULL DEFAULT 0,
    "lifeKeyWords" INTEGER NOT NULL DEFAULT 0,
    "quickSolve" INTEGER NOT NULL DEFAULT 0,
    "averageSolve" INTEGER NOT NULL DEFAULT 0,
    "lifePlaytime" INTEGER NOT NULL DEFAULT 0,
    "conquestProgress" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
