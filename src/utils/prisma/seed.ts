import { PrismaClient } from "@prisma/client";
import { mockArticles, mockCategories, mockUsers } from "./mocks";

const prisma = new PrismaClient();

async function main() {
	// delete all
	await prisma.user.deleteMany();
	await prisma.category.deleteMany();
	await prisma.article.deleteMany();

	// seeding
	for (const category of mockCategories) {
		await prisma.category.create({
			data: category,
		});
	}

	for (const user of mockUsers) {
		const response = await prisma.user.create({
			data: user,
		});

		await prisma.article.createMany({
			data: mockArticles.map((d) => ({
				...d,
				authorId: response.id,
			})),
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
