import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario("Fulano", 0, new Date, 1)).toBeTruthy();
  });
});
