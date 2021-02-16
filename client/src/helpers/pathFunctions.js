export const parsePath = (path) => path.trim().split(' ').map(fragment => fragment.toLowerCase()).join('-'); 

export const unparsePath = (path) => path.trim().split('-').map(fragment => fragment[0].toUpperCase() + fragment.substring(1)).join(' ');  

export function validatePath(props, {categories, subcategories}) {
    if (!props.match.params) return true;

    const params = props.match.params;
    const keys = Object.keys(params);

    const boolean = keys.map(value => {
        switch (value) {
            case 'category':
                return categories.map(value => value.name).includes(unparsePath(params[value]))
            case 'subcategory':
                return subcategories.map(value => value.subcategory).includes(unparsePath(params[value]))
            case 'quiz':
                const quizzes = [...subcategories.map(value => value.quizzes).map(quiz => quiz.quiz_name)];
                return quizzes.includes(unparsePath(params[value]))
            default:
                return false;
        }
    });

    return boolean.every(value => value);
}