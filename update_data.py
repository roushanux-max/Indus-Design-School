import os

os.makedirs('src/data', exist_ok=True)

with open(r'src/components/ProgramsList.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('interface CourseItem {')
end = content.find('];\n\ninterface StackedSectionProps')

if start != -1 and end != -1:
    data_code = content[start:end+3]
    
    with open(r'src/data/courses.ts', 'w', encoding='utf-8') as f:
        modified_data = data_code.replace('interface CourseItem', 'export interface CourseItem')
        modified_data = modified_data.replace('const bdesCourses: CourseItem[]', 'export const bdesCourses: CourseItem[]')
        modified_data = modified_data.replace('const mdesCourses: CourseItem[]', 'export const mdesCourses: CourseItem[]')
        modified_data = modified_data.replace('const minorCourses: CourseItem[]', 'export const minorCourses: CourseItem[]')
        
        f.write(modified_data)
        
    new_content = content[:start] + "import { CourseItem, bdesCourses, mdesCourses, minorCourses } from '../data/courses';\n\n" + content[end+3:]
    with open(r'src/components/ProgramsList.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Extracted successfully")
else:
    print("Could not find start/end", start, end)
