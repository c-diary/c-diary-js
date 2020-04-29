import Diary from '../../diary';
import DiaryEntry from '../../diaryEntry';
import DiaryStats from '../../stats/diaryStats';

test('wellbeingTimeSeries', () => {
    const entry1 = new DiaryEntry(1, new Date());
    entry1.addSymptoms(['cough']);
    const entry2 = new DiaryEntry(2, new Date());
    entry2.addSymptoms(['fever', 'cough']);
    const entry3 = new DiaryEntry(3, new Date());
    entry3.addSymptoms(['fever']);
    const diary = new Diary();
    diary.addEntry(entry1);
    diary.addEntry(entry2);
    diary.addEntry(entry3);
    const stats = new DiaryStats(diary);
    const series = stats.getWellbeingTimeSeries();
    expect(series.y).toEqual([1, 2, 3])
})
