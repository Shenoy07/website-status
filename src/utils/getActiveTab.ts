import { Tab } from '@/interfaces/task.type';

export const getActiveTab = (section?: string): Tab => {
    switch (section) {
        case 'in-progress':
            return Tab.IN_PROGRESS;
        case 'assigned':
            return Tab.ASSIGNED;
        case 'available':
            return Tab.AVAILABLE;
        case 'unassigned':
            return Tab.UNASSIGNED;
        case 'blocked':
            return Tab.BLOCKED;
        case 'needs-review':
            return Tab.NEEDS_REVIEW;
        case 'in-review':
            return Tab.IN_REVIEW;
        case 'verified':
            return Tab.VERIFIED;
        case 'merged':
            return Tab.MERGED;
        case 'completed':
            return Tab.COMPLETED;
        case 'overdue':
            return Tab.OVERDUE;
        case 'done':
            return Tab.DONE;
        default:
            return Tab.ALL;
    }
};

export const tabToUrlParams = (section: Tab): string => {
    switch (section) {
        case Tab.NEEDS_REVIEW:
            return 'needs-review';
        case Tab.IN_REVIEW:
            return 'in-review';
        case Tab.IN_PROGRESS:
            return 'in-progress';
        default:
            return section.toLowerCase();
    }
};
