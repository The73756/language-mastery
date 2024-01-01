export interface SpritesMap {
  shared: 'logo-colored' | 'crown' | 'lightning' | 'cap'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  shared: {
    filePath: 'shared.svg',
    items: {
      'logo-colored': {
        viewBox: '0 0 64 50',
        width: 64,
        height: 50,
      },
      'crown': {
        viewBox: '0 0 70 62',
        width: 70,
        height: 62,
      },
      'lightning': {
        viewBox: '0 0 60 70',
        width: 60,
        height: 70,
      },
      'cap': {
        viewBox: '0 0 69 70',
        width: 69,
        height: 70,
      },
    },
  },
}
