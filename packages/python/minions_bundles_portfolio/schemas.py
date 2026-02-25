"""
Minions Bundle: Portfolio SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Portfolio.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Category(MinionType):
    """High-level grouping mechanism"""
    slug = "category"
    icon = "📁"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="description", type="str", label="description"),
    ]


class Ecosystem(MinionType):
    """A collection of related projects"""
    slug = "ecosystem"
    icon = "🌐"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="categoryId", type="str", label="categoryId"),
        FieldDefinition(name="description", type="str", label="description"),
    ]


class Project(MinionType):
    """A concrete implementation or initiative"""
    slug = "project"
    icon = "🚀"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="ecosystemId", type="str", label="ecosystemId"),
        FieldDefinition(name="scale", type="str", label="scale"),
        FieldDefinition(name="repoUrl", type="str", label="repoUrl"),
        FieldDefinition(name="status", type="str", label="status"),
    ]


BUNDLE_TYPES = [Category, Ecosystem, Project]
