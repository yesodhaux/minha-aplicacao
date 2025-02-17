import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
    const { codigo } = req.query;
    const url = `https://www.saojoaofarmacias.com.br/${codigo}`;

    try {
        const response = await fetch(url);
        const htmlText = await response.text();
        const dom = new JSDOM(htmlText);
        const doc = dom.window.document;
        const resultado1 = doc.querySelector('.sjdigital-custom-apps-5-x-currencyInteger').textContent.trim();
        const resultado2 = doc.querySelector('.sjdigital-custom-apps-5-x-currencyFraction').textContent.trim();

        res.status(200).json({ resultado1, resultado2 });
    } catch (error) {
        console.error('Erro ao buscar as informações:', error);
        res.status(500).send('Erro ao buscar informações');
    }
}
