import test from 'node:test';
import assert from 'node:assert/strict';
import { site, availabilityLabel, contactLinks } from '../src/config.js';
test('dados desconhecidos não criam promessas ou ações de contato', () => {
  assert.ok(Object.values(site.contact).every(value => value === null));
  assert.ok(Object.values(site.policies).every(value => value === null));
  assert.ok(site.services.every(service => service.available === null));
  assert.ok(site.categories.every(category => category.available === null));
  assert.deepEqual(contactLinks(site.contact), []);
});
test('rótulos distinguem confirmação, indisponibilidade e desconhecido', () => {
  assert.equal(availabilityLabel(null), 'Consulte disponibilidade');
  assert.equal(availabilityLabel(true), 'Disponibilidade confirmada');
  assert.equal(availabilityLabel(false), 'Indisponível no momento');
});
test('URLs são construídas somente para formatos permitidos', () => {
  assert.deepEqual(contactLinks({ phone: 'javascript:alert(1)', whatsapp: 'x', email: 'x', instagram: 'https://example.com' }), []);
  assert.equal(contactLinks({ whatsapp: '5511999999999' })[0].href, 'https://wa.me/5511999999999');
});
test('telefone exige de 8 a 15 dígitos, não apenas caracteres de formatação', () => {
  for (const phone of ['--------', '() () ()', '+-------', '123-4567', '1234567890123456']) {
    assert.deepEqual(contactLinks({ phone }), [], `Deve rejeitar ${phone}`);
  }
  for (const [phone, href] of [
    ['1234-5678', 'tel:12345678'],
    ['+55 (11) 99999-9999', 'tel:+5511999999999'],
    ['+123456789012345', 'tel:+123456789012345'],
  ]) {
    assert.deepEqual(contactLinks({ phone }), [{ label: phone, href }]);
  }
});
