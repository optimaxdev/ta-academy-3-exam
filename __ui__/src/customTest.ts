import { test as base, expect } from '@playwright/test';

// Добавить недостающие страницы в фикстуры и типы
type Options = {};

const test = base.extend<Options>({});

export { test, expect };
