import { test, expect } from '@playwright/test';

test('API GET', async ({ request }) => {
    const responseResource = await request.get('https://reqres.in/api/unknown/2');
    expect(responseResource.status()).toBe(200);
    const textResource = await responseResource.text();
    expect(textResource).toContain('fuchsia rose');
    console.log(await responseResource.json());
})

test('API POST', async ({ request }) => {
    const createUser = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Harry",
            "job": "Wizard"
        }
    })
    expect(createUser.status()).toBe(201);
    const textCreate = await createUser.text();
    expect(textCreate).toContain('Harry');
    console.log(await createUser.json());
})

test('API PUT', async ({ request }) => {
    const updateUser = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Harry Potter",
            "job": "Powerful Wizard"
        }
    })
    expect(updateUser.status()).toBe(200);
    const textUpdate = await updateUser.text();
    expect(textUpdate).toContain('Powerful Wizard');
    console.log(await updateUser.json());
})

test('API DELETE', async ({ request }) => {
   const deleteUser = await request.delete('https://reqres.in/api/users/2');
   expect(deleteUser.status()).toBe(204);
})

test('API Error 404', async ({ request }) => {
    const notFoundResource = await request.get('https://reqres.in/api/unknown/23');
    expect(notFoundResource.status()).toBe(404);
})