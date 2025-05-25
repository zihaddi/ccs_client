const { API_URL_CITIZEN, CMS_EMAIL, CMS_PASSWORD } = useRuntimeConfig().public
const form = {
    email: CMS_EMAIL,
    password: CMS_PASSWORD,
};

const loginHandler = async () => {
    return fetch(`${API_URL_CITIZEN}cms/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default defineEventHandler(async (event) => {
    const login = await loginHandler();
    return { login };
});