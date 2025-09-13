import type { Prisma } from "../../generated/prisma";

const id = "cm07vrx4y00002vwkx0koma0j";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const categories = [
	{
		id: "cm07vrx4y00002vwkx0koma0j",
		name: "テクノロジー",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0k",
		name: "ファッション",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0l",
		name: "食品と飲料",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0m",
		name: "健康とウェルネス",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0n",
		name: "スポーツ",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0o",
		name: "エンターテイメント",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0p",
		name: "旅行",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0q",
		name: "教育",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0r",
		name: "自動車",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
	{
		id: "cm07vrx4y00002vwkx0koma0s",
		name: "家庭とガーデニング",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	},
] satisfies Prisma.CategoryCreateInput[];

const _article = {
	id: `post1-${id}`,
	title: "テクノロジー",
	content,
	status: "PUBLISHED",
	createdAt: new Date("2024-08-31T05:16:36.323Z"),
	updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	categories: {
		create: categories,
	},
	likedUsers: undefined,
} satisfies Prisma.ArticleCreateInput;

const _articlePublish = {
	id: `post1-${id}`,
	title: "テクノロジー",
	content,
	status: "PUBLISHED",
	createdAt: new Date("2024-08-31T05:16:36.323Z"),
	updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	categories: {
		create: categories,
	},
	likedUsers: undefined,
} satisfies Prisma.ArticleCreateInput;

const _articleDraft = {
	id: `post1-${id}`,
	title: "テクノロジー",
	content,
	status: "DRAFT",
	createdAt: new Date("2024-08-31T05:16:36.323Z"),
	updatedAt: new Date("2024-08-31T05:16:36.323Z"),
	categories: {
		create: categories,
	},
	likedUsers: undefined,
} satisfies Prisma.ArticleCreateInput;

const articles = [
	{
		id: `post1-${id}`,
		title: "テクノロジーテクノロジーテクノロジー",
		content,
		status: "PUBLISHED",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
	{
		id: `post2-${id}`,
		title: "ファッションファッションファッション",
		content,
		status: "PUBLISHED",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
	{
		id: `post3-${id}`,
		title: "食品と飲料食品と飲料食品と飲料",
		content,
		status: "PUBLISHED",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
	{
		id: `post4-${id}`,
		title: "健康とウェルネス健康とウェルネス健康とウェルネス",
		content,
		status: "DRAFT",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
	{
		id: `post5-${id}`,
		title: "スポーツスポーツスポーツ",
		content,
		status: "DRAFT",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
	{
		id: `post6-${id}`,
		title: "エンターテイメントエンターテイメントエンターテイメント",
		content,
		status: "DRAFT",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		author: {
			create: { name: "user" },
		},
	},
] satisfies Prisma.ArticleCreateInput[];

const hashedPassword =
	"$2a$12$rPoIPJ1G9UfhP7awiq6CYu2inajTrnWHFopVguF0kvEqkSu8q93A6"; // Test1234!

const users = [
	{
		id: `admin-${id}`,
		name: "admin",
		email: "admin@example.com",
		emailVerified: null,
		image: null,
		hashedPassword,
		role: "ADMIN",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		posts: { create: articles },
		likedArticles: { create: articles },
	},
	{
		id: `user-${id}`,
		name: "user",
		email: "user@example.com",
		emailVerified: null,
		image: null,
		hashedPassword,
		role: "USER",
		createdAt: new Date("2024-08-31T05:16:36.323Z"),
		updatedAt: new Date("2024-08-31T05:16:36.323Z"),
		posts: undefined,
		likedArticles: undefined,
	},
] satisfies Prisma.UserCreateInput[];

export const mockArticles: Prisma.ArticleCreateInput[] = articles.map((d) => {
	return {
		title: d.title,
		content: d.content,
		status: d.status,
	};
});

export const mockCategories: Prisma.CategoryCreateInput[] = categories.map(
	(d) => ({ id: d.id, name: d.name }),
);

export const mockUsers: Prisma.UserCreateInput[] = users.map(
	({ posts: _post, likedArticles: _likedArticles, ...rest }) => rest,
);
