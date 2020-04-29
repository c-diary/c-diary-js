import DiaryEntry, { fromJson } from '../diaryEntry';

test('json', () => {
    const entry = new DiaryEntry(1, new Date());
    const jsonEntry = entry.json();
    expect(entry).toEqual(fromJson(jsonEntry));
});