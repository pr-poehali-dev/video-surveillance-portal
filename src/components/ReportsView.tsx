import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ReportsView = () => {
  const activityData = [
    { day: 'Пн', events: 245 },
    { day: 'Вт', events: 312 },
    { day: 'Ср', events: 278 },
    { day: 'Чт', events: 356 },
    { day: 'Пт', events: 289 },
    { day: 'Сб', events: 198 },
    { day: 'Вс', events: 167 },
  ];

  const maxEvents = Math.max(...activityData.map(d => d.events));

  const cameraStats = [
    { district: 'Центральный', cameras: 42, online: 40, offline: 2 },
    { district: 'Дзержинский', cameras: 38, online: 36, offline: 2 },
    { district: 'Ленинский', cameras: 35, online: 34, offline: 1 },
    { district: 'Свердловский', cameras: 41, online: 39, offline: 2 },
    { district: 'Индустриальный', cameras: 33, online: 32, offline: 1 },
    { district: 'Мотовилихинский', cameras: 36, online: 35, offline: 1 },
    { district: 'Кировский', cameras: 22, online: 22, offline: 0 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Отчеты и аналитика</h2>
          <p className="text-muted-foreground">Статистика работы системы</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="Download" size={18} className="mr-2" />
            Экспорт PDF
          </Button>
          <Button variant="outline">
            <Icon name="FileSpreadsheet" size={18} className="mr-2" />
            Экспорт Excel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Событий за неделю</p>
              <p className="text-4xl font-bold text-foreground">1,845</p>
              <p className="text-sm text-accent mt-2">↑ 12% к прошлой неделе</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Среднее время работы</p>
              <p className="text-4xl font-bold text-foreground">99.2%</p>
              <p className="text-sm text-accent mt-2">↑ 0.5%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Записей в архиве</p>
              <p className="text-4xl font-bold text-foreground">8,432</p>
              <p className="text-sm text-muted-foreground mt-2">За последний месяц</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Использовано места</p>
              <p className="text-4xl font-bold text-foreground">2.4 ТБ</p>
              <p className="text-sm text-muted-foreground mt-2">из 5 ТБ доступно</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BarChart3" size={20} />
            Активность системы за неделю
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium w-8">{data.day}</span>
                  <span className="text-foreground font-semibold">{data.events} событий</span>
                </div>
                <div className="relative w-full bg-secondary rounded-full h-3">
                  <div 
                    className="absolute top-0 left-0 bg-primary rounded-full h-3 transition-all duration-500"
                    style={{ width: `${(data.events / maxEvents) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            Статистика по районам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cameraStats.map((stat, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-foreground">{stat.district}</span>
                  <span className="text-sm text-muted-foreground">{stat.cameras} камер</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-accent">В сети</span>
                      <span className="font-medium">{stat.online}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${(stat.online / stat.cameras) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-destructive">Не в сети</span>
                      <span className="font-medium">{stat.offline}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div 
                        className="bg-destructive h-2 rounded-full"
                        style={{ width: `${(stat.offline / stat.cameras) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsView;
