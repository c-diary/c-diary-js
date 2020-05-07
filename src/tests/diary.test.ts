import moment from 'moment';
import Diary, { fromJson } from '../diary';
import DiaryEntry from '../diaryEntry';

test('json', () => {
    const entry = new DiaryEntry(1, new Date());
    const diary = new Diary();
    diary.addEntry(entry);
    const jsonDiary = diary.json();
    expect(diary).toEqual(fromJson(jsonDiary));
});

test('symptoms', () => {
    const entry1 = new DiaryEntry(1, new Date());
    entry1.addSymptoms(['cough']);
    const entry2 = new DiaryEntry(1, new Date());
    entry2.addSymptoms(['fever', 'cough']);
    const entry3 = new DiaryEntry(1, new Date());
    entry3.addSymptoms(['fever']);
    const diary = new Diary();
    diary.addEntry(entry1);
    diary.addEntry(entry2);
    diary.addEntry(entry3);
    expect(diary.getSymptoms()).toEqual(['cough', 'fever'])
})

test('sorted entries', () => {
    const current = moment(new Date());
    const entry1 = new DiaryEntry(1, current.toDate());
    entry1.addSymptoms(['cough']);
    const entry2 = new DiaryEntry(1, current.add(1, 'seconds').toDate());
    entry2.addSymptoms(['fever', 'cough']);
    const entry3 = new DiaryEntry(1, current.add(1, 'seconds').toDate());
    entry3.addSymptoms(['fever']);
    const diary = new Diary();
    diary.addEntry(entry3);
    diary.addEntry(entry1);
    diary.addEntry(entry2);
    const entries = diary.sortedEntries();
    expect(entries[0]).toBe(entry1);
    expect(entries[1]).toBe(entry2);
    expect(entries[2]).toBe(entry3);

})
