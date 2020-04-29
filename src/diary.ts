import DiaryEntry from './diaryEntry';

export function fromJson(json: any): Diary {
    const obj = JSON.parse(json)
    const diary: Diary = new Diary();
    for (const entry of obj.entries) {
        const e = new DiaryEntry(entry.wellbeing, new Date(entry.timestamp));
        e.symptoms = entry.symptoms;
        diary.addEntry(e);
    }
    return diary;
}

export default class Diary {
    entries: DiaryEntry[];

    constructor() {
        this.entries = [];
    }

    addEntry(entry: DiaryEntry) {
        this.entries.push(entry);
    }

    getSymptoms() {
        const symptoms = [];
        for (const entry of this.entries) {
            for (const symptom of entry.symptoms) {
                symptoms.push(symptom);
            }
        }
        return Array.from(new Set(symptoms))
    }

    json(): string {
        return JSON.stringify(this);
    }

    sortedEntries() {
        let entries = this.entries;
        entries = entries.sort((a, b) => {
            if (a.timestamp > b.timestamp) {
                return 1;
            }
            if (a.timestamp < b.timestamp) {
                return -1;
            }

            return 0;
        });
        return entries;
    }
}
