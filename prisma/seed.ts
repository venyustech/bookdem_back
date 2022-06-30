import { prisma } from "../src/database.js";

async function main() {
    await createCategories();
    await createGenders();
    await createPrivacy();
}
main().catch((e) => {
    process.exit(1);
}).finally(async()=>{
    await prisma.$disconnect();
})
async function createPrivacy() {
    await prisma.privacy.createMany({
        data: [
            {
                type: "public"
            },
            {
                type: "private"
            }
        ],
        skipDuplicates: true,
    });
}
async function createGenders() {
    await prisma.gender.createMany({
        data: [
            {
                name: "Acadêmicos"
            },
            {
                name: "Ação/aventura"
            },
            {
                name: "Coletânia"
            },
            {
                name: "Comédia"
            },
            {
                name: "Comédia Romântica"
            },
            {
                name: "Crônica"
            },
            {
                name: "Drama"
            },
            {
                name: "Ficção Científica / Fantasia"
            },
            {
                name: "Horror"
            },
            {
                name: "Infantojuvenil"
            },
            {
                name: "Não Ficção"
            },
            {
                name: "Poemas"
            },
            {
                name: "Quadrinhos/Mangá"
            },
            {
                name: "Romance"
            },
            {
                name: "Suspense"
            }
        ],
        skipDuplicates: true,
    });
}

async function createCategories() {
    await prisma.category.createMany({
        data: [
            {
                name: "Assexual"
            },
            {
                name: "Bissexual"
            },
            {
                name: "Gay"
            },
            {
                name: "Hétero"
            },

            {
                name: "Intersex"
            },
            {
                name: "Lésbica"
            },
            {
                name: "Queer"
            },
            {
                name: "Transexual"
            },
            {
                name: "Mais +"
            },
        ],
        skipDuplicates: true,
    });
}

