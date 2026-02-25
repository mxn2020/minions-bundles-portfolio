/**
 * @module minions-bundles-portfolio/relations
 * Relation definitions for Minions Bundle: Portfolio.
 */

export const bundleRelations = [
  { from: 'ecosystem', relation: 'categorized_in', to: 'category' },
  { from: 'project', relation: 'part_of', to: 'ecosystem' },
  { from: 'project', relation: 'requires', to: 'project' },
];

