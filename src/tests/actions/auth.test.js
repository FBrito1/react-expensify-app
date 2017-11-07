import { login, logout } from '../../actions/auth';

test('should setup the login object correctly', () => {
    const action = login('123abc')

    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    });
}); 

test('should setup the logout object correctly', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});