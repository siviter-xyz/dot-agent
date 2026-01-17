# Review Protocol

Reviewing plans, specs, and design before proceeding.

## Review Principles

- **Review before commitment** - Review plans before spec phase, specs before applying to docs
- **Technical feasibility** - Ensure approach is technically sound
- **Alignment** - Check consistency with existing architecture and patterns
- **Completeness** - Verify all necessary aspects are covered

## Plan Review

**When**: After plan generation, before spec phase

**Review Criteria**:
- Technical feasibility of approach
- Alignment with existing codebase patterns
- Completeness of implementation steps
- Identification of potential issues or edge cases
- Design considerations adequacy

**Review Process**:
1. Analyze plan for technical soundness
2. Check alignment with existing architecture
3. Verify all necessary steps are included
4. Identify missing considerations
5. Suggest improvements or clarifications
6. Proceed to spec phase when plan is solid

## Spec Review

**When**: After spec generation, before applying to docs

**Review Criteria**:
- Completeness of specifications
- Consistency with existing documentation patterns
- Technical accuracy
- Alignment with plan (if exists)
- Design specifications adequacy

**Review Process**:
1. Check all relevant categories are specified
2. Verify consistency with existing docs
3. Ensure technical accuracy
4. Review design specifications
5. Check alignment with plan
6. Apply to docs when specs are agreed

## Design Review

**When**: Embedded in plan and spec phases

**Review Considerations**:
- UI/UX consistency
- Component design coherence
- Architecture soundness
- Integration points
- User experience flow

**Design Artifacts**:
- Can be stored in `docs/design/` if needed in repo
- Should align with specs in documentation
- Should be referenced in relevant README.md files

## Review Integration

Reviews are embedded in phases, not separate:

- **Plan phase**: Review plan before proceeding
- **Spec phase**: Review specs before applying to docs
- **Design**: Reviewed as part of plan/spec phases

This keeps the workflow streamlined while ensuring quality.

## Review Checklist

### Plan Review Checklist
- [ ] Technically feasible
- [ ] Aligned with existing architecture
- [ ] Complete implementation steps
- [ ] Design considerations included
- [ ] Edge cases identified
- [ ] Dependencies clear

### Spec Review Checklist
- [ ] All relevant categories specified
- [ ] Consistent with existing docs
- [ ] Technically accurate
- [ ] Design specifications complete
- [ ] Aligned with plan (if exists)
- [ ] Ready to apply to docs

## Iterative Refinement

Both plan and spec phases allow iterative refinement:
- Ask clarifying questions
- Refine based on feedback
- Update research if needed
- Improve design considerations
- Continue until ready to proceed
