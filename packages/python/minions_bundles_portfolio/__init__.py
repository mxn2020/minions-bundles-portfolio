"""
Minions Bundle: Portfolio Python SDK

Top-level structural organizational bundle — categories, ecosystems, projects
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Portfolio.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
