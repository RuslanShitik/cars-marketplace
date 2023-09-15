const roles = ['USER', 'ADMIN', 'SUPER_USER']

const isRole = (allowedRoles, userRole) => {
    return allowedRoles.includes(userRole);
};

export {roles, isRole}