export function getStatusClass(status) {
    if (status === 'notstarted') return 'not-started';
    if (status === 'inprogress') return 'in-progress';
    if (status === 'completed') return 'complete';
    return '';
};