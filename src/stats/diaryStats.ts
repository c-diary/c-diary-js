import Diary from '../diary';

export default class DiaryStats {
    diary: Diary;

    constructor(diary: Diary) {
        this.diary = diary;
    }

    getWellbeingTimeSeries() {
        const x = [];
        const y = [];
        
        for (const entry of this.diary.sortedEntries()) {
            x.push(entry.timestamp);
            y.push(entry.wellbeing);
        }
        const data = {
            x, y
        }
        return data;
    }
}
