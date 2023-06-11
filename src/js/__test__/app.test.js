import {
  createDeamon, createBowman, createMagician, createSwordsman, createUndead, createZombie,
} from '../app';

test('Deamon whith stats', () => {
  const deamon = createDeamon('Shok', 'Deamon');
  expect(deamon).toEqual({
    name: 'Shok',
    type: 'Deamon',
    health: 100,
    lvl: 1,
    attack: 10,
    defence: 40,
  });
});

test('Bowman whith stats', () => {
  const bowman = createBowman('Muse', 'Bowman');
  expect(bowman).toEqual({
    name: 'Muse',
    type: 'Bowman',
    health: 100,
    lvl: 1,
    attack: 25,
    defence: 25,
  });
});

test('Magician whith stats', () => {
  const magician = createMagician('Luisa', 'Magician');
  expect(magician).toEqual({
    name: 'Luisa',
    type: 'Magician',
    health: 100,
    lvl: 1,
    attack: 10,
    defence: 40,
  });
});

test('Undead whith stats', () => {
  const undead = createUndead('Ralf', 'Undead');
  expect(undead).toEqual({
    name: 'Ralf',
    type: 'Undead',
    health: 100,
    lvl: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie whith stats', () => {
  const zombie = createZombie('Oleg', 'Zombie');
  expect(zombie).toEqual({
    name: 'Oleg',
    type: 'Zombie',
    health: 100,
    lvl: 1,
    attack: 40,
    defence: 10,
  });
});

test('Swordsman whith stats', () => {
  expect(createSwordsman('Paul', 'Swordsman')).toEqual({
    name: 'Paul',
    type: 'Swordsman',
    health: 100,
    lvl: 1,
    attack: 40,
    defence: 10,
  });
});

test('Length name < 2', () => {
  expect(() => createSwordsman('P', 'Swordsman')).toThrow('name very short');
});

test('Length name > 10', () => {
  expect(() => createSwordsman('Paulo Maldini', 'Swordsman')).toThrow('name very long');
});

test('string?', () => {
  expect(() => createSwordsman(2234234, 'Swordsman')).toThrow('Name not string');
});

test('type?', () => {
  expect(() => createSwordsman('Paul', 'S')).toThrow('Only Bowman, Swordsman, Magician, Deamon, Undead, Zombie');
});
