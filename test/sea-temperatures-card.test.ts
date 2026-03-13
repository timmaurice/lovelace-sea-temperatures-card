import { describe, it, expect } from 'vitest';
import { SeaTemperaturesCard } from '../src/sea-temperatures-card';
import { HomeAssistant, SeaTemperaturesCardConfig } from '../src/types';

describe('SeaTemperaturesCard', () => {
  it('is defined', () => {
    expect(customElements.get('sea-temperatures-card')).toBeDefined();
  });

  it('sets config correctly', () => {
    const card = new SeaTemperaturesCard();
    const config = {
      type: 'custom:sea-temperatures-card',
      places: [{ device: 'test-device', name: 'Test Place' }],
    };
    card.setConfig(config as unknown as SeaTemperaturesCardConfig);
    expect(
      ((card as unknown as { _config: SeaTemperaturesCardConfig })._config.places[0] as { name: string }).name,
    ).toBe('Test Place');
  });

  it('throws error if places are missing', () => {
    const card = new SeaTemperaturesCard();
    expect(() =>
      card.setConfig({ type: 'custom:sea-temperatures-card' } as unknown as SeaTemperaturesCardConfig),
    ).toThrow("Please define 'places'");
  });

  it('prioritizes entities with historical attributes', () => {
    const card = new SeaTemperaturesCard();
    const config: SeaTemperaturesCardConfig = {
      type: 'custom:sea-temperatures-card',
      places: [{ device: 'device-1' }],
    };
    const hass = {
      states: {
        'sensor.temp_sensor': {
          entity_id: 'sensor.temp_sensor',
          state: '20.0',
          attributes: { unit_of_measurement: '°C' },
        },
        'sensor.sea_temp_sensor': {
          entity_id: 'sensor.sea_temp_sensor',
          state: '21.0',
          attributes: { unit_of_measurement: '°C', yesterday: '20.5' },
        },
      },
      entities: {
        'sensor.temp_sensor': { device_id: 'device-1' },
        'sensor.sea_temp_sensor': { device_id: 'device-1' },
      },
      devices: {
        'device-1': { id: 'device-1', name: 'Test Device' },
      },
      localize: (key: string) => key,
    } as unknown as HomeAssistant;

    card.setConfig(config);
    const data = (
      card as unknown as { _getPlacesData: (h: HomeAssistant, c: SeaTemperaturesCardConfig) => unknown[] }
    )._getPlacesData(hass, config) as Record<string, unknown>[];
    expect(data[0].entity_id).toBe('sensor.sea_temp_sensor');
    expect(data[0].yesterday).toBe('20.5');
  });
});
