// pages/api/_middleware.js
import { middleware } from '../../middleware';

export default function handler(req, res, next) {
    middleware(req, res, next);
}
