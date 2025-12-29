import fs from 'fs';
import path from 'path';

// Fix for __dirname in ESM
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src', 'content', 'blog');
const startDate = new Date('2025-01-01');

const tags = ['Email Marketing', 'Web Development', 'Design', 'Strategy', 'News', 'Career'];

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Generating posts in: ${targetDir}`);

for (let i = 1; i <= 20; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - i * 2);
    const dateStr = date.toISOString().split('T')[0];

    const tag = tags[Math.floor(Math.random() * tags.length)];

    const content = `---
title_es: 'Post de Prueba ${i}'
title_en: 'Test Post ${i}'
description_es: 'Esta es una descripción corta para el post de prueba número ${i} para verificar el scroll infinito.'
description_en: 'This is a short description for test post number ${i} to verify infinite scroll.'
pubDate: '${dateStr}'
tags: ['${tag}']
heroImage: '/blog-placeholder-${(i % 5) + 1}.jpg'
---
import Es from '../../components/mdx/Es.astro';
import En from '../../components/mdx/En.astro';

<Es>
# Post de Prueba ${i}

Contenido de relleno para probar la paginación y el scroll infinito.
Este contenido simplemente ocupa espacio.

* Item 1
* Item 2
* Item 3
</Es>

<En>
# Test Post ${i}

Filler content to test pagination and infinite scroll.
This content just takes up space.

* Item 1
* Item 2
* Item 3
</En>
`;

    fs.writeFileSync(path.join(targetDir, `dummy-post-${i}.mdx`), content);
}

console.log('Successfully generated 20 dummy posts.');
