/**
 * @module minions-bundles-portfolio/views
 * Named query filters for Minions Bundle: Portfolio.
 */

export const bundleViews = {
  activeProjects: {
    description: 'Projects currently in progress',
    type: 'project',
    filter: {
      "status": "active"
},
  },
};

