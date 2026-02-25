/**
 * @module minions-bundles-portfolio/bundle
 * MinionType definitions and imports for Minions Bundle: Portfolio.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const categoryType: MinionType = {
  id: 'bundle-portfolio-category',
  name: 'Category',
  slug: 'category',
  description: 'High-level grouping mechanism',
  icon: '📁',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
  ],
};

export const ecosystemType: MinionType = {
  id: 'bundle-portfolio-ecosystem',
  name: 'Ecosystem',
  slug: 'ecosystem',
  description: 'A collection of related projects',
  icon: '🌐',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'categoryId', type: 'string', label: 'categoryId' },
    { name: 'description', type: 'string', label: 'description' },
  ],
};

export const projectType: MinionType = {
  id: 'bundle-portfolio-project',
  name: 'Project',
  slug: 'project',
  description: 'A concrete implementation or initiative',
  icon: '🚀',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'ecosystemId', type: 'string', label: 'ecosystemId' },
    { name: 'scale', type: 'select', label: 'scale' },
    { name: 'repoUrl', type: 'string', label: 'repoUrl' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  categoryType,
  ecosystemType,
  projectType,
];

