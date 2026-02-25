import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the categoryType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'category');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Category');
        expect(type?.schema.length).toBe(2);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('description');
    });

    it('should define the ecosystemType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'ecosystem');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Ecosystem');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('categoryId');
        expect(fieldNames).toContain('description');
    });

    it('should define the projectType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'project');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Project');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('ecosystemId');
        expect(fieldNames).toContain('scale');
        expect(fieldNames).toContain('repoUrl');
        expect(fieldNames).toContain('status');
    });
});
